export default function handleItemClick(e: Event) {
  const target = e.target as HTMLElement;
  let firstItemValue: string | null = null;
  let secondItemValue: string | null = null;
  console.log("Item Clicked!");

  if (target.classList.contains("flipped")) {
    console.log("Already flipped!");
    return;
  }

  if (firstItemValue === null) {
    firstItemValue = target.textContent;
    target.classList.add("flipped");
    console.log("firstItemValue = " + firstItemValue);
    console.log("target.textContent = " + target.textContent);
  } else if (secondItemValue === null) {
    secondItemValue = target.textContent;
    target.classList.add("flipped");
    console.log("secondItemValue = " + secondItemValue);
    console.log("second target.textContent = " + target.textContent);
  }

  if (firstItemValue === null && secondItemValue === null) {
    document.addEventListener("click", () => {
      const gridItems = document.querySelectorAll("#grid > div");
      gridItems.forEach((item) => {
        item.classList.remove("flipped");
      });
    });
    return;
  }

  if (firstItemValue === secondItemValue) {
    console.log("Match!");
    firstItemValue = null;
    secondItemValue = null;
  } else {
    console.log("No Match!");
    firstItemValue = null;
    secondItemValue = null;
  }

  // console.log("firstItemValue = " + firstItemValue);
}
