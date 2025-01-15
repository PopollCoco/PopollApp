<script>
	import { AppBar } from '@skeletonlabs/skeleton';
</script>

<!-- App Bar -->
<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
    <svelte:fragment slot="lead">
        <img src="/images/iconPopoll.png" alt="Logo Popoll" class="w-10 h-10">
    </svelte:fragment>
    <strong class="text-xl uppercase">Popoll App</strong>
    <svelte:fragment slot="trail">
        <a
            class="btn btn-sm variant-ghost-surface"
            href="/consultList"
            rel="noreferrer"
        >
            LOGIN
        </a>
    </svelte:fragment>
</AppBar>