<script context="module">
    import { connect } from "svelte-mobx";
</script>

<script>
    export let vm;
    const { autorun } = connect();

    let currentTimeString;
    let elapsedSecondsString;

    autorun(() => {
        currentTimeString = vm.currentTimeString;
        elapsedSecondsString = vm.elapsedSecondsString;
        console.log("AUTORUN executed for elapsed time: "+ elapsedSecondsString);
    });
</script>

<div>
    <h1>The time is {currentTimeString}</h1>
    <div>This page has been open for {elapsedSecondsString}</div>
</div>
