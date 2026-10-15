import { useState, useEffect } from 'react'
import ReminderForm from '../Components/ReminderForm'
import { createReminder } from '../Interfaces/reminder'

function Home() {
  const [reminders, setReminders] = useState(() => {
    const saved = localStorage.getItem('reminders')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('reminders', JSON.stringify(reminders))
  }, [reminders])

  function addReminder(title) {
    setReminders([...reminders, createReminder(title)])
  }

  function deleteReminder(id) {
    setReminders(reminders.filter((r) => r.id !== id))
  }

  function toggleDone(id) {
    setReminders(
      reminders.map((r) => (r.id === id ? { ...r, done: !r.done } : r))
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Unutmamam Gerekenler</h1>

        <ReminderForm onAdd={addReminder} />

        <ul className="mt-6 flex flex-col gap-3">
          {reminders.map((r) => (
            <li
              key={r.id}
              className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
            >
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={r.done}
                  onChange={() => toggleDone(r.id)}
                />
                <span className={r.done ? 'line-through text-gray-400' : ''}>
                  {r.title}
                </span>
              </label>
              <button
                onClick={() => deleteReminder(r.id)}
                className="text-red-500 font-semibold"
              >
                Sil
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Home