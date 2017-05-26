import rules from '../rules.json';

const frenchify = content => {

    rules.forEach(function(rule) {
        content = content.replace(new RegExp(rule.from, 'gmi'), rule.to);
    });
    console.log(content);
    return content;
};

export default frenchify;