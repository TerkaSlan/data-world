const onClickHandler = () => {
  // eslint-disable-next-line
  console.log("This is the homepage");
};

const render = () => `
  <div class="row">
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
    <div id="chart"></div>
  </div>
`;

const effects = () => {
  window.addEventListener("click", onClickHandler);
};

const cleanup = () => {
  window.removeEventListener("click", onClickHandler);
};

export const Home = {
  render: render,
  effects: effects,
  cleanup: cleanup,
};
