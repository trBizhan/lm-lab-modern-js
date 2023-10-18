export function longPasswords(passwords) {
  const longPasswords = passwords.filter((item) => item.length >= 9);

  return longPasswords;
}
