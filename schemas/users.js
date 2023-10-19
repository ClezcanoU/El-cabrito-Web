import z from 'zod';

const UserSchema = z.object({
  userName: z.string({
    invalid_type_error: 'El nombre debe ser una cadena de texto',
    required_error: 'El nombre es obligatorio.',
  }),
  direccion: z.string(),
  tel1: z.string().min(10).max(10),
  tel2: z.string().optional(),
  email: z.string().email({
    message: 'El correo electrónico debe ser una dirección de correo válida',
  }),
  password: z.string().min(6),
});

export function validateRegister(input) {
  return UserSchema.safeParse(input);
}

export function validateLogin(input) {
    return UserSchema.partial().safeParse(input);
}
