const input = document.getElementById('function_input');
const function_list = document.getElementById('function_list');

let functions = [];

function keyboard() {
        input.onkeydown = (e) => {
                if (e.keyCode === 13 && input.value != '') {
                        addToGraph({ content: input.value, color: generatorColors(0.5) })
                        input.value = '';
                }
        }
}

function stringToFunction(str) {
        if (str.includes('Math.') || /^[0-9x\+\-*.\/\s\()]*$/.test(str))
                return new Function(["x"], "try{return " + str + "}catch(e){return NaN}");
        try {
                const mathNode = math.parse(str);
                const mathCode = mathNode.compile();
                return function(x) {
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
                return function(x) {
			return NaN;
		};
        }
}

function removeFunction(index) {
        GAME.game.graph.functions.splice(index, 1);
        functions.splice(index, 1);
        display();
}

function addToGraph(func) {
        const _function_ = stringToFunction(func.content);
        if (isNaN(_function_(1))) {
                toastr.error('Invalid function graph.');
                return;
        }
        GAME.game.graph.functions.push([_function_, func.color]);
        functions.push(func);
        display();
        toastr.success('Added function graph.');
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
