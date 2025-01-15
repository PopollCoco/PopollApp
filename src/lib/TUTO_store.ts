import { auth, googleProvider } from '$lib/hooks/firebase';
import { signInWithPopup } from 'firebase/auth';
import { writable } from 'svelte/store';
import type { User } from 'firebase/auth';
import { goto } from '$app/navigation';

// store Svelte qui contient les informations sur l'utilisateur actuellement connecté
export const authStore = writable<{user: User | null;}>({
	user: null
});

// objet qui regroupe deux fonctions réutilisables pour gérer les actions liées à l'authentification :
// logout (déconnexion) et loginWithGoogle (connexion via Google)
export const authHandlers = {
	logout: async () => {
		await auth.signOut();
		goto('/'); // rootpage
	},
	loginWithGoogle: async () => {
		await signInWithPopup(auth, googleProvider);
		goto('/main'); // mainpage
	}
};