import Mustache from 'mustache';

function ColorOption(model, index) {
    this.model = model;
    this.index = index;
}

ColorOption.prototype = {
    template: `
    <label for="{{id}}">{{option.name}}</label>
    <div class="option__control">
        {{#options}}
            <label class="color" data-value="{{color}}">
                <input type="radio" name="{{id}}" value="{{color}}" data-option="{{index}}" {{checked}}>
                <span class="color__swatch" style="background-color: {{color}}"></span>
                <span class="color__name">{{name}}</span>
            </label>
        {{/options}}
        {{^options}}
            <input type="color" data-option="{{index}}" id="{{id}}" value="{{value}}">
        {{/options}}
    </div>
    `,

    _generateId: function() {
        return 'control_' + Math.floor(Math.random() * 10000);
    },

    render: function() {
        if (!this.el) {
            this.el = document.createElement('DIV');
            this.el.className = 'option option--color';

            var html = Mustache.render(this.template, {
                id: this._generateId(),
                index: this.index,
                option: this.model.options[this.index],
                options: this.model.options[this.index].options,
                value: this.model.getOptionValue(this.index)
            });
            this.el.innerHTML = html;
        }
        return this;
    }
};

export default ColorOption;
