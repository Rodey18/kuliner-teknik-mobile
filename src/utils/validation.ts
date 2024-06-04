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

  if (!text) {
    return {isValid: false, message: 'Email harus diisi!'};
  }

  if (!emailRegex.test(text)) {
    return {isValid: false, message: 'Gunakan email yang benar!'};
  }

  return {isValid: true, message: ''};
};

export const checkUsername = (text: string) => {
  if (!text) {
    return {isValid: false, message: 'Username harus diisi!'};
  }

  if (text.length > 100) {
    return {
      isValid: false,
      message: 'Mencapai batas maksimum username!',
    };
  }
  return {isValid: true, message: ''};
};

export const checkPhoneNumber = (text: string) => {
  if (!text) {
    return {isValid: false, message: 'Nomor telepon harus diisi!'};
  }

  if (!/^\d+$/.test(text)) {
    return {
      isValid: false,
      message: 'Nomor telepon hanya boleh berisi angka!',
    };
  }

  if (text.length < 10 || text.length > 12) {
    return {
      isValid: false,
      message: 'Nomor telepon Anda harus memiliki 10 hingga 12 digit',
    };
  }

  return {isValid: true, message: ''};
};

export const PhoneNumberFormatter = (text: string) => {
  if (text.startsWith('+62')) {
    return '+62' + text.slice(3);
  } else if (text.startsWith('0')) {
    return '+62' + text.slice(1);
  }
  return '+62' + text;
};
