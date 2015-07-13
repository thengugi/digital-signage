var Node = require('famous/core/Node');
var DOMElement = require('famous/dom-renderables/DOMElement');
var Align = require('famous/components/Align');

function Header () {
    Node.call(this);
    this.el = new DOMElement(this, {
        classes: ['header']
    });

    this.title = this.addChild();
    this.titleEl = new DOMElement(this.title).setProperty('textAlign', 'left')
                                             .setProperty('lineHeight', '80px')
                                             .setProperty('fontSize', '50px');

    this.titleAlign = new Align(this.title);
}

Header.prototype = Object.create(Node.prototype);

Header.prototype.onReceive = function onReceive (event, payload) {
    if (event === 'changeSection') this.changeSection(payload.to);
};

Header.prototype.changeSection = function changeSection (to) {
    // -1 in Y will put the title directly above its parent
    this.titleAlign.set(1, -1, -1, {duration: 450}, function () {
        // while the title is offscreen
        // change the content
        this.titleEl.setContent(to);

        // align 0, 0, 0 places the title back into its parent
        // exactly
        this.titleAlign.set(0, 0, 1, {duration: 450});
    }.bind(this));
};

module.exports = Header;