import { useState } from 'react'

function ReminderForm({ onAdd }) {
  const [title, setTitle] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (title.trim() === '') return
    onAdd(title)
    setTitle('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-xl shadow flex flex-col gap-3"
    >
      <input
        type="text"
        placeholder="Ne hatırlatalım?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border border-gray-300 rounded-lg p-2"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white rounded-lg p-2 font-semibold"
      >
        Kaydet
      </button>
    </form>
  )
}

export default ReminderForm