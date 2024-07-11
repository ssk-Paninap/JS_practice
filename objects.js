robot = new Object()

robot.firstName = "Big Bot"
robot.age = 21
robot.information = function(){
    return this.firstName +" " + this.age
}

console.log(robot.information())
console.log (robot)
