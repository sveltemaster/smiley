<script>
	import Face from './components/Face.svelte';
	import Buttons from './components/Buttons.svelte';
	import Header from './components/Header.svelte';
	import Container from './components/Container.svelte';
	import {story} from './story';

	let storyIndex = 0;
	let happyScore = 0;
	let name = '';

	$: question = story[storyIndex];
	$: smileySays = message(question, name)
	$: options = question.options;

	let showHeader = false;
	$: if (storyIndex === 3 && happyScore > 0) showHeader = true;

	function clickHandler(e) {
		if (e.detail.number === 'reset') {
			happyScore = 0;
			storyIndex = 0;
			showHeader = false;
		} else {
			happyScore += parseInt(e.detail.number);
			storyIndex += 1;
		}
	}

	function message(question, name) {
		const end = question.end;
		if (end) {
			return (
				(happyScore === 0 ? end.neutral : 
				happyScore > 0 ? end.nice: 
				end.mean)
			);
		} else {
			return question.smileySays;
		}
	}
</script>

{#if showHeader}
	<Header />
{/if}

<Container {storyIndex}>
	{#if storyIndex === 0}
		What's your name?
		<input type="text" bind:value={name}>
	{/if}
	<h1>{name}, {smileySays}</h1>
	<Face {happyScore} size={storyIndex + 1} />
	<Buttons {options} on:click={clickHandler} />
</Container>

<style>
	:global(*) {
		box-sizing: border-box;
	}
	:global(body, html) {
		margin: 0;
		height: 100vh;
		overflow: hidden;
	}
	h1 {
		text-align: center;
	}
</style>