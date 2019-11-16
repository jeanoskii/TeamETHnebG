pragma solidity ^0.4.25;

contract Digiploma {
    //Attributes
    string  firstName;
    string  lastName;
    string  schoolName;
    string  location;
    string  date;
    string  specialOrderNumber;
    Degree degree;
    
    //Degree choices
    enum Degree {
        BSIT,
        BSCS,
        BSCPE,
        BSBM,
        BSTHM
    }
    
    function createDiploma(string ifirstName, string ilastName, string ischoolName, string ilocation, string idate, string ispecialOrderNumber ,Degree idegree) public {
        firstName           = ifirstName;
        lastName            = ilastName;
        schoolName          = ischoolName;
        location            = ilocation;
        date                = idate;
        degree              = idegree;
        specialOrderNumber  =ispecialOrderNumber;
    }
    
    //Mutators
    function setFirstName(string newfirstName)                  public {
        firstName           = newfirstName;
    }
    function setLastName(string newlastName)                    public {
        lastName            = newlastName;
    }
    function setSchoolName(string newSchoolName)                public {
        schoolName          = newSchoolName;
    }
    function setLocation(string newLocation)                    public {
        location            = newLocation;
    }
    function setDegree(Degree newDegree)                        public{
        degree              = newDegree;
    }
    function setSpecialOrderNumber(string newSpecialOrderNumber) public{
        specialOrderNumber  = newSpecialOrderNumber;
    }
    
    ///Accessors
    function getFirstName()public view returns(string){
        return firstName;
    }
    function getLastName()public view returns(string){
        return lastName;
    }
    function getSchoolName()public view returns(string){
        return schoolName;
    }
    function getLocation()public view returns(string){
        return location;
    }
    function getDate()public view returns(string){
        return date;
    }
    function getDegree()public view returns(Degree){
        return degree;
    }
    function getSpecialOrdernumber()public view returns(string){
        return specialOrderNumber;
    }

}
