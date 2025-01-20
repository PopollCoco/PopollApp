// # Store Svelte pour gérer les informations utilisateur

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { writable } from "svelte/store";
import { auth } from "../hooks/firebase";
import type { User } from "firebase/auth";  // Importer le type User depuis Firebase

// Définir le type du store
interface AuthStoreState {
    user: User | null;  // user peut être soit un objet User, soit null
    loading: boolean;
    data: Record<string, any>; // Définir data comme un objet avec des valeurs dynamiques
}

export const authStore = writable<AuthStoreState>({
    user: null,
    loading: true,
    data: {}
})

let email: string;
let pass: string;

export const authHandlers = {
    signup: async (email : string, pass : string)  => {
        await createUserWithEmailAndPassword(auth, email, pass)
    },
    login: async (email: string, pass:string) => {
        await signInWithEmailAndPassword(auth, email, pass)
    },
    logout: async () => {
        await signOut(auth)
    }
}