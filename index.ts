class IssueDemo {

    name: string = '';

    constructor(name: string) {
        this.name = name;
    }

    greeting(): void {
        console.log(`Hello, ${this.name}!`);
    }

}

let issueDemo = new IssueDemo('Guy');
issueDemo.greeting();