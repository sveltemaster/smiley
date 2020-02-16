<script>
    import {createEventDispatcher} from 'svelte';
    
    export let options;

    const dispatch = createEventDispatcher();
</script>

<div class="buttons-container">
    {#each Object.keys(options) as number}
        <button on:click={()=>dispatch('click', {number})}>
            {options[number]}
        </button>
    {/each}
</div>

<style>
    .buttons-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    button {
		display: block;
        font-size: 1.2rem;
        margin: 10px;
        transition: 1s;
        padding: 10px;
        cursor: pointer;
		border: solid black 2px;
        border-radius: 50px;
        background-color: blueviolet;
        color: white;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
	}
</style>