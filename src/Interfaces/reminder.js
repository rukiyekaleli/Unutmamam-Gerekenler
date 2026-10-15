// Hatırlatıcı veri modeli
// Bir hatırlatıcı şu alanlara sahiptir:
// { id: sayı, title: yazı, done: true veya false }

export function createReminder(title) {
  return {
    id: Date.now(),
    title: title,
    done: false,
  }
}