<script>
    export let happyScore = 0;
    export let size = 2;

    const faces = ['🤬', '😡', '😭','🙁',   '😕',  '😐', '🙂', '😀', '😄', '😊', '😘']
    $: index = happyScore + 5;
</script>

<div 
    style="font-size: {size}rem;">
    {faces[index]}
</div>

<style>
    div {
        height: 100px;
        width: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>