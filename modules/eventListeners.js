import { createEmployee, addEmployee } from '../modules/service.js'
import {
    searchResultDiv,
    searchTimesBtn as clearBtn,
    addBtn as addForm,
    searchInput as searchForm,
} from '../modules/dom.js'

clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchResultDiv.innerHTML = "";
});
addForm.addEventListener('click', () => {
    addEmployee();
});
searchForm.addEventListener("keyup", () => {
    searchResultDiv.innerHTML = "";
    if (searchInput.value == "") {
        searchResultDiv.innerHTML = "";
        return;
    }
    createEmployee()
});
export default addForm