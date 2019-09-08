<script context="module">
    import { connect } from "svelte-mobx";
</script>

<script>
    const { autorun } = connect();

    export let vm;

    let formattedCurrentTime;
    let formattedElapsedSeconds;

    $: autorun(() => {
        formattedCurrentTime = vm.formattedCurrentTime;
        formattedElapsedSeconds = vm.formattedElapsedSeconds;
    });
</script>

<div>
    <h1>The time is {formattedCurrentTime}</h1>
    <div>This page has been open for {formattedElapsedSeconds}</div>
</div>

<style>
    :global(body) {
        padding: 4em;
    }
</style>
