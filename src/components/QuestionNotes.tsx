"use client";

import React, { useState, useEffect } from "react";
import { Edit2, Save, X, Trash2 } from "lucide-react";
import { WrongAnswer } from "@/lib/user-progress";

interface QuestionNotesProps {
  questionId: string;
  wrongAnswer?: WrongAnswer;
  onSave: (notes: string) => void;
  onDelete?: () => void;
}

const MAX_CHARS = 500;

export default function QuestionNotes({
  questionId,
  wrongAnswer,
  onSave,
  onDelete,
}: QuestionNotesProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [notes, setNotes] = useState(wrongAnswer?.userNotes || "");
  const [charCount, setCharCount] = useState(wrongAnswer?.userNotes?.length || 0);

  useEffect(() => {
    setNotes(wrongAnswer?.userNotes || "");
    setCharCount(wrongAnswer?.userNotes?.length || 0);
  }, [wrongAnswer?.userNotes]);

  const handleSave = () => {
    if (notes.trim()) {
      onSave(notes.trim());
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setNotes(wrongAnswer?.userNotes || "");
    setCharCount(wrongAnswer?.userNotes?.length || 0);
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete();
      setNotes("");
      setCharCount(0);
      setIsEditing(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    if (newValue.length <= MAX_CHARS) {
      setNotes(newValue);
      setCharCount(newValue.length);
    }
  };

  const formatTimestamp = (date?: Date) => {
    if (!date) return "";
    const now = new Date();
    const diffMs = now.getTime() - new Date(date).getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "today";
    if (diffDays === 1) return "yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return new Date(date).toLocaleDateString();
  };

  const hasNotes = wrongAnswer?.userNotes && wrongAnswer.userNotes.length > 0;

  return (
    <div className="mt-4 rounded-sm border-2 border-stone-200 bg-stone-50 p-4 dark:border-stone-700 dark:bg-stone-900/50">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h4 className="font-medium text-stone-900 dark:text-stone-100">
            Your Notes
          </h4>
          {wrongAnswer?.notesAddedAt && !isEditing && (
            <span className="text-xs text-stone-500 dark:text-stone-400">
              (Added {formatTimestamp(wrongAnswer.notesAddedAt)})
            </span>
          )}
        </div>
        {!isEditing && (
          <div className="flex gap-2">
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-1 text-sm text-[#1a365d] hover:text-[#2d4a7c] dark:text-amber-400 dark:hover:text-amber-300"
            >
              <Edit2 size={14} />
              {hasNotes ? "Edit" : "Add Note"}
            </button>
            {hasNotes && onDelete && (
              <button
                onClick={handleDelete}
                className="flex items-center gap-1 text-sm text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
              >
                <Trash2 size={14} />
                Delete
              </button>
            )}
          </div>
        )}
      </div>

      {isEditing ? (
        <div className="space-y-3">
          <textarea
            value={notes}
            onChange={handleChange}
            placeholder="Why did I get this wrong? What pattern should I watch for next time?"
            className="w-full rounded-sm border-2 border-stone-300 bg-white p-3 text-sm text-stone-900 placeholder-stone-400 focus:border-[#1a365d] focus:outline-none dark:border-stone-600 dark:bg-stone-800 dark:text-stone-100 dark:placeholder-stone-500 dark:focus:border-amber-500"
            rows={4}
            autoFocus
          />
          <div className="flex items-center justify-between">
            <span className={`text-xs ${charCount > MAX_CHARS * 0.9 ? "text-red-600 dark:text-red-400" : "text-stone-500 dark:text-stone-400"}`}>
              {charCount} / {MAX_CHARS} characters
            </span>
            <div className="flex gap-2">
              <button
                onClick={handleCancel}
                className="flex items-center gap-1 rounded-sm border-2 border-stone-300 bg-white px-3 py-1.5 text-sm font-medium text-stone-700 hover:bg-stone-50 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-300 dark:hover:bg-stone-700"
              >
                <X size={14} />
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={!notes.trim()}
                className="flex items-center gap-1 rounded-sm bg-[#1a365d] px-3 py-1.5 text-sm font-medium text-white hover:bg-[#2d4a7c] disabled:cursor-not-allowed disabled:opacity-50 dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
              >
                <Save size={14} />
                Save
              </button>
            </div>
          </div>
        </div>
      ) : hasNotes ? (
        <div className="rounded-sm bg-white p-3 text-sm text-stone-700 dark:bg-stone-800 dark:text-stone-300">
          {wrongAnswer?.userNotes}
        </div>
      ) : (
        <p className="text-sm italic text-stone-500 dark:text-stone-400">
          No notes yet. Click "Add Note" to write down why you got this wrong and what to remember.
        </p>
      )}
    </div>
  );
}
