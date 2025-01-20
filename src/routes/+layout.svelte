<script>
	import Header from '$lib/components/Header.svelte'
	import Footer from '$lib/components/Footer.svelte'

	import '../app.postcss';

	import { onMount } from "svelte";
    import { auth, db } from "$lib/hooks/firebase";
    import { getDoc, doc, setDoc } from "firebase/firestore";
    import { authStore } from "$lib/stores/userStore";

    const nonAuthRoutes = ["/"];
	let title = "Popoll App 2";

    onMount(() => {
        console.log("Mounting");
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            const currentPath = window.location.pathname;

            if (!user && !nonAuthRoutes.includes(currentPath)) {
                window.location.href = "/";
                return;
            }

            if (user && currentPath === "/") {
                window.location.href = "/consultList";
                return;
            }

            if (!user) {
                return;
            }

            let dataToSetToStore;
            const docRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(docRef);
            if (!docSnap.exists()) {
                console.log("Creating User");
                const userRef = doc(db, "users", user.uid);
                dataToSetToStore = {
                    email: user.email,
                    todos: [],
                };
                await setDoc(userRef, dataToSetToStore, { merge: true });
            } else {
                console.log("Fetching User");
                const userData = docSnap.data();
                dataToSetToStore = userData;
            }

            authStore.update((curr) => {
                return {
                    ...curr,
                    user,
                    data: dataToSetToStore,
                    loading: false,
                };
            });
        });
        return unsubscribe;
    });
</script>

<!-- Layout général -->
<div class="flex flex-col min-h-screen bg-background text-on-background">
	<!-- Header -->
	<Header title={title}/>

	<!-- Contenu principal -->
	<main class="flex-grow container mx-auto px-4 py-6 max-w-[1000px]">
		<slot />
	</main>

	<!-- Footer -->
	<Footer />
</div>