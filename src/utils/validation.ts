export const checkPassword = (text: string) => {
  if (text.length < 8) {
    return {
      isValid: false,
      message: 'Password harus terdiri dari minimal 8 karakter.',
    };
  }

  if (!/[a-z]/.test(text)) {
    return {
      isValid: false,
      message:
        'Password harus mengandung setidaknya satu huruf kecil (lowercase).',
    };
  }

  if (!/[A-Z]/.test(text)) {
    return {
      isValid: false,
      message:
        'Password harus mengandung setidaknya satu huruf besar (uppercase).',
    };
  }

  if (!/\d/.test(text)) {
    return {
      isValid: false,
      message: 'Password harus mengandung setidaknya satu angka.',
    };
  }

  return {isValid: true, message: ''};
};

export const checkEmail = (text: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(text)) {
    return {isValid: false, message: 'Gunakan email yang benar!'};
  }

  return {isValid: true, message: ''};
};

export const checkUsername = (text: string) => {
  if (!text) {
    return {isValid: false, message: 'Username tidak boleh kosong!'};
  }
  return {isValid: true, message: ''};
};
