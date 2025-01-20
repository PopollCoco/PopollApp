<script>
    import { authHandlers } from "../stores/userStore";
    import {fade} from 'svelte/transition';

    let email = "";
    let password = "";
    let confirmPass = "";
    let error = false;
    let errorText = "";
    let register = false;
    let authenticating = false;

    async function handleAuthenticate() {
        if (authenticating) {
            return;
        }
        if (!email || !password || (register && !confirmPass)) {
            error = true;
            errorText = "Please fill in all fields";
            console.log("PerrorTextlease fill in all fields");
            return;
        }
        authenticating = true;

        try {
            if (!register) {
                await authHandlers.login(email, password);
            } else {
                await authHandlers.signup(email, password);
            }
        } catch (err) {
            error = true;
            errorText = "There was an auth error";
            console.log("There was an auth error", err);
            authenticating = false;
        }
    }

    function handleRegister() {
        register = !register;
    }
</script>

<div class="flex flex-col items-center justify-center flex-1 p-6 w-[400px] m-auto max-w-[100%]">
    <form class="flex flex-col gap-4 w-full max-w-md">
        <h1 class="h1">{register ? "Register" : "Login"}</h1>
        {#if error}
            <div class="alert variant-filled-error" transition:fade={{ duration: 200 }}>
                Error : {errorText}
            </div>
        {/if}
        <label class="label flex flex-col">
            <p class={email ? " above" : " center"}>Email</p>
            <input
                class="input" 
                bind:value={email}
                type="email"
                placeholder="Email" />
        </label>
        <label class="label flex flex-col">
            <p class={password ? " above" : " center"}>Password</p>
            <input
                class="input"
                bind:value={password}
                type="password"
                placeholder="Password"
            />
        </label>
        {#if register}
            <label class="label flex flex-col">
                <p class={confirmPass ? " above" : " center"}>
                    Confirm Password
                </p>
                <input
                    class="input"
                    bind:value={confirmPass}
                    type="password"
                    placeholder="Confirm Password"
                />
            </label>
        {/if}

        <button type="button" class="btn variant-filled w-[150px] m-auto" on:click={handleAuthenticate} >
            {#if authenticating}
                <i class="fa-solid fa-spinner animate-spin" />
            {:else}
                Submit
            {/if}
        </button>
    </form>
    <div class="flex flex-col gap-2 mt-6">
        <p class="relative flex items-center justify-center text-center">
            <span class="flex-grow border-t-2 border-primary-500 mr-4" aria-hidden="true"></span>
            Or
            <span class="flex-grow border-t-2 border-primary-500 ml-4" aria-hidden="true"></span>
        </p>
        {#if register}
            <div class="flex items-center justify-center gap-2">
                <p>Already have an account?</p>
                <p>
                    <a
                        href="/"
                        class="anchor"
                        on:click={handleRegister}
                        on:keydown={() => {}}
                    >
                        Login
                    </a>
                </p>
            </div>
        {:else}
            <div class="flex items-center justify-center gap-2">
                <p>Don't have an account?</p>
                <p>
                    <a
                        href="/"
                        class="anchor"
                        on:click={handleRegister}
                        on:keydown={() => {}}
                    >
                        Register
                    </a>
                </p>
            </div>
        {/if}
    </div>
</div>