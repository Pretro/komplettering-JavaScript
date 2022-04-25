import { Todo } from "./todo";

// Load 3 sections from html and assign a constructor
window.addEventListener('load', () => {
	const form = document.querySelector("#uppgifter");
	const input = document.querySelector("#nya_uppgifter");
	const list_elem = document.querySelector("#todo");


	form.addEventListener('submit', (e) => {
		e.preventDefault();

        // create a constructor witch we can input a value
		const tarea = (input as HTMLInputElement).value;

        //Creation of elements
		const tarea_elem = document.createElement('div');
		tarea_elem.classList.add('tarea');

		const tarea_content_elem = document.createElement('div');
		tarea_content_elem.classList.add('content');

		tarea_elem.appendChild(tarea_content_elem);

		const tarea_input_elem = document.createElement('input');
		tarea_input_elem.classList.add('text');
		tarea_input_elem.type = 'text';
		(tarea_input_elem as HTMLInputElement).value = tarea;
		tarea_input_elem.setAttribute('readonly', 'readonly');

		tarea_content_elem.appendChild(tarea_input_elem);

		//Creation of the action div with the buttons erase and delete
        const tarea_actions_elem = document.createElement('div');
		tarea_actions_elem.classList.add('actions');
		
		const tarea_edit_elem = document.createElement('button');
		tarea_edit_elem.classList.add('uppdatera');
		tarea_edit_elem.innerText = 'Uppdatera';

		const tarea_delete_elem = document.createElement('button');
		tarea_delete_elem.classList.add('radera');
		tarea_delete_elem.innerText = 'Radera';

		tarea_actions_elem.appendChild(tarea_edit_elem);
		tarea_actions_elem.appendChild(tarea_delete_elem);

		tarea_elem.appendChild(tarea_actions_elem);

		list_elem.appendChild(tarea_elem);

		(input as HTMLInputElement).value = '';
        
        /*created an if statement. If teh user chooses to update, it will also
        be possible to save*/
		tarea_edit_elem.addEventListener('click', (e) => {
			if (tarea_edit_elem.innerText.toLowerCase() == "uppdatera") {
				tarea_edit_elem.innerText = "Spara";
				tarea_input_elem.removeAttribute("readonly");
				tarea_input_elem.focus();
			} else {
				tarea_edit_elem.innerText = "Uppdatera";
				tarea_input_elem.setAttribute("readonly", "readonly");
			}
		});

        // Delete the task from the list
		tarea_delete_elem.addEventListener('click', (e) => {
			list_elem.removeChild(tarea_elem);
		});
	});
});