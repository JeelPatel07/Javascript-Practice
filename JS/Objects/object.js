var User = function (firstName,courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function (){
        console.log(`Course count is:${this.courseCount}`);
    };
};

User.prototype.getFirstName = function (){
    console.log(`Your firstName is:${this.firstName}`);
};

var jeel = new User("Jeel",2);
jeel.getCourseCount();
jeel.getFirstName();

