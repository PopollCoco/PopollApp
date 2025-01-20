<script>
	import { AppBar } from '@skeletonlabs/skeleton';
    import { authHandlers, authStore } from '../stores/userStore';

    export let title = "Popoll App";
</script>

<!-- App Bar -->
<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
    <svelte:fragment slot="lead">
        <img src="/images/iconPopoll.png" alt="Logo Popoll" class="w-14 h-14">
    </svelte:fragment>
    <strong class="text-3xl uppercase">{title}</strong>
    <svelte:fragment slot="trail">
        {#if !$authStore.loading}
            <button class="btn btn-sm variant-ghost-surface" on:click={authHandlers.logout}>
                <i class="fa-solid fa-right-from-bracket" />
                <p>Logout</p>
            </button>
        {/if} 
    </svelte:fragment>
</AppBar>