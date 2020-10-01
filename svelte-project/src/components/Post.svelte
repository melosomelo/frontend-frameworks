<script>
  //imports
  import { Link } from "svelte-routing";
  import { createEventDispatcher } from "svelte";
  //props
  export let title;
  export let text;
  export let timestamp;
  export let id;
  //month mapping
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  //creating dispatcher to listen to link click events
  const dispatch = createEventDispatcher();
</script>

<style>
  .post-wrapper {
    position: relative;

    padding: 1rem 2rem;

    display: flex;
    flex-direction: column;
  }

  .top-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 1rem;
  }

  .icons-wrapper img {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

  .icons-wrapper .edit-post-icon {
    margin-right: 5px;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 600;
  }

  p {
    font-weight: 300;

    margin-bottom: 4rem;
  }

  span {
    font-weight: bold;
    font-size: 1.5rem;
    position: absolute;
    bottom: 1rem;
    right: 2rem;
  }
</style>

<article class="post-wrapper">
  <div class="top-wrapper">
    <h2>{title}</h2>
    <div class="icons-wrapper">
      <Link to={'/edit-post/' + id}>
        <img
          on:click={() => dispatch('viewChange', {
              newPageTitle: 'Edit a post',
            })}
          src="/images/edit-icon.svg"
          alt="edit icon"
          class="edit-post-icon" />
      </Link>
      <img src="/images/close-icon.svg" alt="close icon" />
    </div>
  </div>
  <p>{text}</p>
  <span>{months[timestamp.getMonth()]}
    {timestamp.getDate()},
    {timestamp.getFullYear()}</span>
</article>
