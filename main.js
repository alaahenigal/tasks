const tasks = [
    { title: "Do laundry", completed: true, priority: "medium" },
    { title: "study javascript", completed: false, priority: "high" },
    { title: "Buy groceries", completed: false, priority: "low" },
    { title: "Go to the gym", completed: false, priority: "medium" },
];

const result = tasks.reduce(function (accumulator, task) {
    if (accumulator[task.priority]) {
        accumulator[task.priority] += 1;
    } else {
        accumulator[task.priority] = 1;
    }
    return accumulator;
}, {});

console.log(result);
















