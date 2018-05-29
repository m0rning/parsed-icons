const fa = require('../dist/fontawesome.json');

export function FontAwesome(): Array<string> {
    return fa || [];
}
