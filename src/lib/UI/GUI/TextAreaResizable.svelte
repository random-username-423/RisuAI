<script lang="ts">
    import { onMount } from 'svelte';
    import { DataBase } from "../../../ts/storage/database";
    import { longpress } from 'src/ts/gui/longtouch';

    let textarea;
    let previousScrollHeight = 0;
    export let value = ''
    export let handleLongPress = (e:MouseEvent) => {};

    function resize() {
        textarea.style.height = '0px'; // Reset the textarea height
        textarea.style.height = `calc(${textarea.scrollHeight}px + 1rem)`; // Set the new height
    }

    function handleInput() {
        if (textarea.scrollHeight !== previousScrollHeight) {
            previousScrollHeight = textarea.scrollHeight;
            resize();
        }
    }

    onMount(() => {
        resize();
    });
</script>
  
<textarea
    bind:this={textarea}
    on:input={handleInput}
    use:longpress={handleLongPress}
    bind:value={value}
    class="rounded-md p-2 text-textcolor bg-transparent resize-none overflow-y-hidden border border-darkborderc"
    style:font-size="{0.875 * ($DataBase.zoomsize / 100)}rem"
    style:line-height="{($DataBase.lineHeight ?? 1.25) * ($DataBase.zoomsize / 100)}rem"
/>