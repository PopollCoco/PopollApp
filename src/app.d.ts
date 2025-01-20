// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}

declare global {

    type UserType = {
        displayName: string | null;
        uid: string;
        email: string | null;
    };

    type consultationType = {
        id: string;
        title: string;
		description: string;
    };
    
    namespace App {	}
}
