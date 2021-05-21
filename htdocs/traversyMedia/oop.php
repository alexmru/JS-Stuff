<?php 

class Person {
    private $name;
    private $email;

    public function __construct($name, $email) {
        $this->name = $name;
        $this->email = $email;
        echo 'Person created!'.'<br>';
    }

    public function setName($name) {
        $this->name = $name;
    }

    public function getName() {
        return $this->name;
    }
    public function setEmail($email) {
        $this->email = $email;
    }

    public function getEmail() {
        return $this->email;
    }

}

class Customer extends Person {
    private $balance;

    public function __construct($name, $email, $balance) {
        // $this->name = $name;
        // $this->email = $email;
        // $this->balance = $balance;
        // echo 'Customer created!';

        parent::__construct($name, $email, $balance);
        $this->balance = $balance;
        echo 'A new ' . __CLASS__ . ' has been created!';
    }
    
    public function setBalance($balance) {
        $this->balance = $balance;
    }

    public function getBalance($balance) {
        return $this->balance;
    }

}

$person1 = new Person('Darius', 'darius@test.com');

echo '<br>';

// $person1->name ='Alex';
// echo $person1->name;

// $person1->setName('Oana');

// echo $person1->getName();

// echo '<br>';

// $person1->setEmail('Oana@test.com');

// echo $person1->getEmail();

echo $person1->getName();
echo '<br>';


////////////////////////////////////// INHERITANCE ///////////////////

$customer1 = new Customer('Marian', 'marian@mail.com', 500);








?>