var IssueDemo = (function () {
    function IssueDemo(name) {
        this.name = '';
        this.name = name;
    }
    IssueDemo.prototype.greeting = function () {
        console.log("Hello, " + this.name + "!");
    };
    return IssueDemo;
}());
var issueDemo = new IssueDemo('Guy');
issueDemo.greeting();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUlJLG1CQUFZLElBQVk7UUFGeEIsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUdkLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFRCw0QkFBUSxHQUFSO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFVLElBQUksQ0FBQyxJQUFJLE1BQUcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTCxnQkFBQztBQUFELENBQUMsQUFaRCxJQVlDO0FBRUQsSUFBSSxTQUFTLEdBQUcsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDckMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDIn0=