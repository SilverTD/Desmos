const input = document.getElementById('function_input');
const function_list = document.getElementById('function_list');

let functions = [];

function keyboard() {
        input.onkeydown = (e) => {
                if (e.keyCode === 13) {
                        addToGraph({ content: input.value, color: generatorColors(0.5) })
                        input.value = "";
                }
        }
}

function stringToFunction(str) {
        let newFunc;
        if (str.includes('Math.'))
                return new Function(["x"], "try{return " + str + "}catch(e){}");
        try {
                const mathNode = math.parse(str);
                const mathCode = mathNode.compile();
                newFunc = function(x) {
                        const scope = {
                                x: x,
                        };
                        try {
                                return mathCode.eval(scope);
                        } catch(e) {
                                return NaN;
                        }
                }
        } catch (e) {
                newFunc = function(x) {
			return NaN;
		};
        }
        return newFunc;
}

function removeFunction(index) {
        GAME.game.graph.functions.splice(index, 1);
        functions.splice(index, 1);
        display();
}

function addToGraph(func) {
        GAME.game.graph.functions.push([stringToFunction(func.content), func.color]);
        functions.push(func);
        display();
}

function display() {
        let html = '';
        functions.map((func, index) => {
                html += `
                        <div class="function_" onclick="removeFunction(${index})">
                                <div class="function_color" style="background: ${func.color}">
                                        <div class="function_index">
                                                ${index + 1}
                                        </div>
                                </div>
                                <div class="function_content">${func.content}</div>
                        </div>
                `
        });
        function_list.innerHTML = html;
}

window.onload = () => {
        GAME.game = new Game();
        GAME.game.start();

        keyboard();
}
