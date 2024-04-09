import React, { useEffect, useRef, useState } from 'react'
import { MarkdownRenderer } from '~/components/docs/md/MarkdownRenderer'

const EditPrevious = ({ content, borderColor, handleChange }: any) => {
  const [showTextarea, setShowTextarea] = useState(true)
  const [isXl, setIsXl] = useState(false)
  const [markdownScrollPosition, setMarkdownScrollPosition] = useState(0)
  const [textareaScrollPosition, setTextareaScrollPosition] = useState(0)
  const markdownEditorRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    function handleResize() {
      setIsXl(window.innerWidth >= 1280)
    }

    handleResize() // Set initial size
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleDisplay = () => {
    setShowTextarea(!showTextarea)
  }

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.scrollTop = textareaScrollPosition
    }
    if (markdownEditorRef.current) {
      markdownEditorRef.current.scrollTop = markdownScrollPosition
    }
  }, [showTextarea])

  const handleTextareaScroll = (event: React.UIEvent<HTMLTextAreaElement>) => {
    setTextareaScrollPosition(event.currentTarget.scrollTop)
  }

  const handleMarkdownScroll = (event: React.UIEvent<HTMLDivElement>) => {
    setMarkdownScrollPosition(event.currentTarget.scrollTop)
  }

  return (
    <>
      {(showTextarea || isXl) && (
        <textarea
          ref={textareaRef}
          rows={4}
          name="comment"
          id="comment"
          className="overflow-scroll bg-transparent flex-1 resize-none block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          value={content}
          onChange={handleChange}
          onScroll={handleTextareaScroll}
          style={{ display: showTextarea || isXl ? 'block' : 'none' }}
        />
      )}

      {(!showTextarea || isXl) && (
        <div
          ref={markdownEditorRef}
          className={`overflow-scroll rounded-md  border-2 ${borderColor} flex-1 p-10`}
          style={{ display: showTextarea && !isXl ? 'none' : 'block' }}
          onScroll={handleMarkdownScroll}
        >
          <MarkdownRenderer>{content}</MarkdownRenderer>
        </div>
      )}

      {!isXl && (
        <button
          onClick={toggleDisplay}
          className="bg-blue-700 xl:hidden text-white absolute -top-2 right-24 px-4 py-2 rounded-md mt-4"
        >
          Toggle
        </button>
      )}
    </>
  )
}

export default EditPrevious
