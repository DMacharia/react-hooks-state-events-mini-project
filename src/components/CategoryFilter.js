import React from "react";

function CategoryFilter({ onButtonSelect, selectedButton, categories }) {
	return (
		<div className="categories">
			<h5>Category filters</h5>
			{categories.map((category, index) => (
				<button
					className={onButtonSelect === category ? "selected" : ""}
					key={index}
					onClick={() => {
						selectedButton(category);
					}}
				>
					{category}
				</button>
			))}{" "}
		</div>
	);
}

export default CategoryFilter;
