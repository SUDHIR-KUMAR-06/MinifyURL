import superbase from "./superbase";

export async function login({ email, password }) {
  const { data, error } = await superbase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw new Error(error.message);
  return data;
}
