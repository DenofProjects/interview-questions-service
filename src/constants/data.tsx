export const data = [
  {
    question: "what is immutable classes in java?",
    answer:
      "Immutable class in java means that once an object is created, we cannot change its content. In Java, all the wrapper classes (like Integer, Boolean, Byte, Short) and String class is immutable. We can create our own immutable class as well." +
      " read more : https://www.geeksforgeeks.org/create-immutable-class-java/",
  },
  {
    question: "Internal working of hashmap ?",
    answer:
      "https://howtodoinjava.com/java/collections/hashmap/how-hashmap-works-in-java/",
  },

  {
    question: "Print metrix in spiral form",
    answer:
      "https://www.geeksforgeeks.org/print-a-given-matrix-in-spiral-form/",
  },

  {
    question: "What is hashmap collision.",
    answer:
      "A collision, or more specifically, a hash code collision in a HashMap, is a situation where two or more key objects produce the same final hash value and hence point to the same bucket location or array index." +
      "read more : https://www.baeldung.com/java-hashmap-advanced#:~:text=Collisions%20in%20the%20HashMap,bucket%20location%20or%20array%20index.",
  },

  {
    question: "How to use object as key in hashmap ?",
    answer:
      "https://howtodoinjava.com/java/collections/hashmap/design-good-key-for-hashmap/",
  },

  {
    question: "Serialization and Deserialization in Java",
    answer: "https://www.geeksforgeeks.org/serialization-in-java/",
  },

  {
    question: "Volatile and transiate in java.",
    answer:
      "https://www.geeksforgeeks.org/difference-between-volatile-and-transient-keywords-in-java/",
  },

  {
    question: "what is comparator and compareable.",
    answer: "https://www.baeldung.com/java-comparator-comparable",
  },

  {
    question: "Make singleton using double locking method.",
    answer: "https://www.baeldung.com/java-singleton-double-checked-locking",
  },

  {
    question: "What is scope of bean in spring boot.",
    answer:
      "1. Singleton" +
      "2. Prototype" +
      "3. Request" +
      "4. Session" +
      "5. Global-Session" +
      " " +
      "read more : https://www.tutorialspoint.com/spring/spring_bean_scopes.htm",
  },

  {
    question: "Difference between Controller and RestController.",
    answer:
      "RestController = Controller + ResponseBody " +
      "https://www.geeksforgeeks.org/difference-between-controller-and-restcontroller-annotation-in-spring/",
  },

  {
    question: "Can we write same name method in single class",
    answer:
      "Yes, https://www.tutorialspoint.com/can-we-define-multiple-methods-in-a-class-with-the-same-name-in-java",
  },

  {
    question:
      "If there is no constructor in the class then how we can create object",
    answer: "Yes, there is one default constructor",
  },

  {
    question: "Difference between abstract class and interface",
    answer:
      "https://www.javatpoint.com/difference-between-abstract-class-and-interface",
  },

  {
    question: "Internal working of stream functions",
    answer: "https://theboreddev.com/understanding-java-streams/",
  },
  {
    question: "difference between hashmap and concurrenthashmap",
    answer:
      " the HashMap is a non-synchronized and non-Thread safe, while the ConcurrentHashMap is a synchronized and Thread-safe collection class. " +
      " https://www.javatpoint.com/hashmap-vs-concurrenthashmap-in-java" +
      " https://www.geeksforgeeks.org/difference-hashmap-concurrenthashmap/",
  },
  {
    question: "Difference Between ConcurrentHashMap and SynchronizedHashMap",
    answer:
      "The ConcurrentHashMap and SynchronizedHashMap both are the Collection classes which are thread-safe and can be used in multithreaded and concurrent java application. But there are few differences that exists between them. In this article, we have tried to cover all these differences between them." +
      " https://www.geeksforgeeks.org/difference-between-concurrenthashmap-and-synchronizedhashmap/",
  },
  {
    question:
      "Difference between ClassDefNotFoundError and ClassNotFoundException.",
    answer:
      "ClassDefNotFoundError is compile time error it comes when class not found on compile time where ClassNotFoundException is run time exception where jvm is unable to load class.",
  },
  {
    question: "Can we manual throw error in java?",
    answer: "Yes, but we can not handle it and program will terminate 100%",
  },
  {
    question: "What is volatile keyword used for?",
    answer:
      "WIth volatile keyword, updating value in any object will skip its cache and it will directly update in ram only." +
      "read more : https://www.youtube.com/watch?v=R9MqDY2SxbA&list=PL3hpmQhMoz-dMhvnkTunjOMZSa_f3FH24&index=6",
  },
  {
    question: "What is race condition ?",
    answer:
      "When a critical code is executed by two threads simultaniously then it is called race condition.",
  },
  {
    question:
      "define functionality of static and default methods of classes in inheritence.",
    answer:
      "If there is a class named Bird and it is extended by Pegion, Bird have one static method which will print" +
      "bird name and pigeon class override same method. then static methods will be called by reference of the object" +
      "and default methods are created actual objects." +
      " for more : https://www.youtube.com/watch?v=8TAp5rxQy4s&list=PL3hpmQhMoz-dMhvnkTunjOMZSa_f3FH24&index=8",
  },
  {
    question: "What is pure function ?",
    answer:
      "It should not modify any outside data or shold not modify any state." +
      "Its behaviour should not depend on any outside data. It can only depend on input arguments.",
  },
  {
    question: "What is functional interface ?",
    answer:
      "The interface which have only one abstract method defined." +
      "it can have any number of static and default methods. but only one abstract method. By default all methods are default in interfaces." +
      "we add @FunctionalInterface annotation on the top of interface to just avoid that by mistake noone can write any other abstract method in " +
      "the interface, by adding annoation it will give compile time error if other abstract method is in the class.",
  },
  {
    question: "What is predicate ?",
    answer:
      "Predicate is one funtional interface, which return boolean with its abstract method. for any given conditioon or object. " +
      " filter method from stream takes Predicate as argument. predicate have 3 default and 2 static methods. default are : and(), or(), negate()" +
      " static are : isEqual(Object o), not(Prediacate<T t>) , Watch More : https://www.youtube.com/watch?v=KMV15nx8H9s&list=PL3hpmQhMoz-dMhvnkTunjOMZSa_f3FH24&index=11",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
];
