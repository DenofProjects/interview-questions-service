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
      "read more : https://www.tutorialspoint.com/spring/spring_bean_scopes.htm"
      + " youtube links : https://www.youtube.com/watch?v=FuFGBHAW3gQ, https://www.youtube.com/watch?v=Zx9iYwQqaPg, https://www.youtube.com/watch?v=YTxDobzfFeg",
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
    answer:
      "https://theboreddev.com/understanding-java-streams/ " +
      "and : https://medium.com/@palivela.chaitu/java-streams-394274a2bd72",
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
      "Its behaviour should not depend on any outside data. It can only depend on input arguments."
      + "https://www.geeksforgeeks.org/pure-functions-in-javascript/",
  },
  {
    question: "What is functional interface ?",
    answer:
      "The interface which have only one abstract method defined." +
      "it can have any number of static and default methods. but only one abstract method. By default all methods are default in interfaces." +
      "we add @FunctionalInterface annotation on the top of interface to just avoid that by mistake noone can write any other abstract method in " +
      "the interface, by adding annoation it will give compile time error if other abstract method is in the class."
      + "https://www.geeksforgeeks.org/functional-interfaces-java/",
  },
  {
    question: "What is predicate ?",
    answer:
      "Predicate is one funtional interface, which return boolean with its abstract method. for any given conditioon or object. " +
      " filter method from stream takes Predicate as argument. predicate have 3 default and 2 static methods. default are : and(), or(), negate()" +
      " static are : isEqual(Object o), not(Prediacate<T t>) , Watch More : https://www.youtube.com/watch?v=KMV15nx8H9s&list=PL3hpmQhMoz-dMhvnkTunjOMZSa_f3FH24&index=11",
  },
  {
    question:
      "Difference Between Method Overloading and Method Overriding in Java",
    answer:
      "Method Overriding is a Run time polymorphism. In method overriding, the derived class provides the specific implementation of the method that is already provided by the base class or parent class. In method overriding, the return type must be the same or co-variant (return type may vary in the same direction as the derived class). " +
      "for more : https://www.geeksforgeeks.org/difference-between-method-overloading-and-method-overriding-in-java/",
  },
  {
    question:
      "Difference between Compile-time and Run-time Polymorphism in Java",
    answer:
      "https://www.geeksforgeeks.org/difference-between-compile-time-and-run-time-polymorphism-in-java/",
  },
  {
    question: "overloading which paradigm",
    answer: "NA",
  },
  {
    question:
      "Difference Between Serializable and Externalizable in Java Serialization",
    answer:
      "The process of writing the state of an object to a file is called serialization, but strictly speaking, it is the process of converting an object from java supported form into a file-supported form or network-supported form by using fileOutputStream and objectOutputStream classes we can implement serialization. " +
      "But we can serialize only serializable objects. An object is said to be serializable if and only if the corresponding class implements a Serializable interface. Serializable interface is present in java.io package, and it doesn’t contain any method and hence it is a marker interface. If we are trying to serializable a non-serializable object then we will get Runtime Exception saying notSerializableException. " +
      "for more : https://www.geeksforgeeks.org/difference-between-serializable-and-externalizable-in-java-serialization/",
  },
  {
    question: "Difference between Serialization and Externalization in Java",
    answer:
      "Serialization and externalization both are the processes of converting an object to stream byte and storing byte stream in database or memory. The class which implements java.io.Serializable interface can be serialized. On the other hand, externalization used for custom serialization based on the requirement in the application. Externalization extends java.io.Serializable. " +
      "https://www.tutorialspoint.com/difference-between-serialization-and-externalization-in-java",
  },
  {
    question: "Can we declare an abstract method final or static in java?",
    answer:
      "If you declare a method in a class abstract to use it, you must override this method in the subclass. But, overriding is not possible with static methods. Therefore, an abstract method cannot be static." +
      "https://www.tutorialspoint.com/can-we-declare-an-abstract-method-final-or-static-in-java#:~:text=Declaring%20abstract%20method%20static,abstract%20method%20cannot%20be%20static.",
  },
  {
    question: "Can Abstract Classes Have Static Methods in Java?",
    answer:
      "https://www.javatpoint.com/can-abstract-classes-have-static-methods-in-java",
  },
  {
    question:
      "Difference between default and static interface method in Java 8.",
    answer:
      "Default methods enable you to add new functionality to the interfaces of your libraries and ensure binary compatibility with code written for older versions of those interfaces.A static method is a method that is associated with the class in which it is defined rather than with any object." +
      "https://www.tutorialspoint.com/difference-between-default-and-static-interface-method-in-java-8#:~:text=Default%20methods%20enable%20you%20to,rather%20than%20with%20any%20object.",
  },
  {
    question:
      "why abstract class if interface is like abstract class after java 8",
    answer:
      "https://javaconceptoftheday.com/interface-vs-abstract-class-after-java-8/",
  },
  {
    question: "Spring Conditional Annotations",
    answer: "https://www.baeldung.com/spring-conditional-annotations",
  },
  {
    question: "Java – @Target Annotations",
    answer: "https://www.geeksforgeeks.org/java-target-annotations/",
  },
  {
    question: "what is controller advice",
    answer: "https://www.scaler.com/topics/spring-boot/controller-advice/",
  },
  {
    question: "Difference between PUT and POST HTTP requests",
    answer:
      "PUT and POST requests have lots of similarities certainly when making an HTTP request and both can be meddled with so that one performs the functions of the other. This article revolves around the major differences between PUT and POST Requests." +
      "https://www.geeksforgeeks.org/diffrence-between-put-and-post-http-requests/",
  },
  {
    question: "Introduction to Generic Trees (N-ary Trees)",
    answer:
      "Generic trees are a collection of nodes where each node is a data structure that consists of records and a list of references to its children(duplicate references are not allowed). Unlike the linked list, each node stores the address of multiple nodes. Every node stores address of its children and the very first node’s address will be stored in a separate pointer called root." +
      " https://www.geeksforgeeks.org/generic-treesn-array-trees/",
  },
  {
    question: "Designing a Payment System",
    answer:
      "https://newsletter.pragmaticengineer.com/p/designing-a-payment-system",
  },
  {
    question: "what is native query",
    answer: " a SQL statement that is specific to a particular database (e.g. MySQL),"
      + "  https://www.geeksforgeeks.org/spring-boot-jpa-native-query-with-example/",
  },
  {
    question: "Spring Boot – Transaction Management Using @Transactional Annotation",
    answer: "https://www.geeksforgeeks.org/spring-boot-transaction-management-using-transactional-annotation/",
  },
  {
    question: "how should we stop a stream, if we keep getting it. ",
    answer: "https://www.baeldung.com/java-break-stream-foreach",
  },
  {
    question: "Diff b/w Treemap and Hashmap",
    answer: "https://www.geeksforgeeks.org/hashmap-treemap-java/ , youtube link : https://www.youtube.com/watch?v=ecQJCRBxabY, https://www.youtube.com/watch?v=2eBFyiuA36w",
  },
  {
    question: "Difference Between UNION and UNION ALL",
    answer: "UNION and UNION ALL in SQL are used to retrieve data from two or more tables. UNION returns distinct records from both the table, while UNION ALL returns all the records from both the tables. In this article, we will explore the difference between UNION and UNION ALL. "
      + "https://www.shiksha.com/online-courses/articles/difference-between-union-and-union-all/"
      + ", youtube links : https://www.youtube.com/watch?v=JZdtgPaPP_A",
  },
  {
    question: "callable and runnable interface",
    answer: "java.lang.Runnable is an interface that is to be implemented by a class whose instances are intended to be executed by a thread. There are two ways to start a new Thread – Subclass Thread and implement Runnable. There is no need of sub-classing Thread when a task can be done by overriding only run() method of Runnable."
      + "https://www.geeksforgeeks.org/difference-between-callable-and-runnable-in-java/"
      + ", youtube links : https://www.youtube.com/watch?v=8fEjTZj1mOM,  https://www.youtube.com/watch?v=G0kQBUvCDbs",
  },
  {
    question: "Two way binding (React)",
    answer: "React is a fascinating library of JavaScript that simplifies creating frontend and user interface. One of the important aspects is how it binds data with the UI components. Data binding in React can be done through declared variables, props and state. It gives us the flexibility to synchronize both the data as well as UI. " +
      "youtube links : https://www.youtube.com/watch?v=55WGjyT8TLw, blog link: https://legacy.reactjs.org/docs/two-way-binding-helpers.html,  https://handsontable.com/blog/understanding-data-binding-in-react",
  },
  {
    question: "Pojo vs Bean vs spring bean difference",
    answer: "POJO classes and Beans both are used to define java objects to increase their readability and reusability. POJOs don’t have other restrictions while beans are special POJOs with some restrictions."
      + "link : https://www.geeksforgeeks.org/pojo-vs-java-beans/, youtube links : https://www.youtube.com/watch?v=Er69xXR0Xlg, https://www.youtube.com/watch?v=lQ3svlKjs70",
  },
  {
    question: "final finally finallize",
    answer: "youtube links : https://www.youtube.com/watch?v=9B0Miy4_o8o, https://www.youtube.com/watch?v=RLInHtq9j2w  blog link : https://www.javatpoint.com/difference-between-final-finally-and-finalize",
  },
  {
    question: "is Java is Pass by Value, Not Pass by Reference",
    answer: "Technically, Java is always pass by value, because even though a variable might hold a reference to an object, that object reference is a value that represents the object’s location in memory. Object references are therefore passed by value."
      + " Both reference data types and primitive data types are passed by value."
      + "https://www.digitalocean.com/community/tutorials/java-is-pass-by-value-and-not-pass-by-reference"
      + "youtube links : https://www.youtube.com/watch?v=w4sGl3HxgZw, https://www.youtube.com/watch?v=vt9juFfNq9M, https://www.youtube.com/watch?v=ywOMwJbSAlM (code example)",
  },
  {
    question: "What is marker interface.",
    answer: "have body, but no methods , youtube links: https://www.youtube.com/watch?v=fRu_Mc9rEYg, https://www.youtube.com/watch?v=cDqBat4tuek(both are for Creating custom Marker interface)"
      + ", https://www.youtube.com/watch?v=qeGCxKCWFcQ, blog link : https://www.geeksforgeeks.org/marker-interface-java/ , https://codepumpkin.com/marker-interface-interview-questions/",
  },
  {
    question: "can we define static in markup interface, scenerio to use markup interface",
    answer: "yes, as per interviewer, need to research more",
  },
  {
    question: "Ds used by hashset treeset",
    answer: "https://www.youtube.com/watch?v=E6VGISKKSdQ, blog : https://www.javatpoint.com/hashset-vs-treeset-java",
  },
  {
    question: "Spring – Understanding Inversion of Control with Example",
    answer: "Spring IoC (Inversion of Control) Container is the core of Spring Framework. It creates the objects, configures and assembles their dependencies, manages their entire life cycle. The Container uses Dependency Injection(DI) to manage the components that make up the application. "
      + "https://www.geeksforgeeks.org/spring-understanding-inversion-of-control-with-example/"
      + "youtube link : https://www.youtube.com/watch?v=DQI66PNtyk8",
  },
  {
    question: "Spring framework hindi youtube link ",
    answer: "https://www.youtube.com/watch?v=KRMNTudb0AY&list=PL0zysOflRCekeiERASkpi-crREVensZGS",
  },
  {
    question: "we have two ioc and one  bean, how many object",
    answer: "two objects will be created, as two iocs are there.",
  },
  {
    question: "@transiant annotation./ @Transient Annotation vs. transient Keyword",
    answer: "When persisting Java objects into database records using an Object-Relational Mapping (ORM) framework, we often want to ignore certain fields. If the framework is compliant with the Java Persistence API (JPA), we can add the @Transient annotation to these fields. In this tutorial, we will demonstrate proper usage of the @Transient annotation. We will also look at its relationship with Java's built-in transient keyword."
      + "blog : https://www.baeldung.com/jpa-transient-ignore-field"
      + "youtube link : https://www.youtube.com/watch?v=lM1_fMTU_kM (annotation), https://www.youtube.com/watch?v=Wlr4Pt8X318 (keyword)",
  },
  {
    question: "spring AOP(Aspect Oriented Programming)",
    answer: "Aspect-Oriented Programming (AOP) is one of the key elements of the Spring Framework. AOP praises Object-Oriented Programming in such a way that it also provides modularity. But the key point of modularity is the aspect than the class. AOP breaks the program logic into separate parts called concerns. "
      + "https://www.youtube.com/watch?v=9Y5-q0DvhRA&list=PL5mjp3QjkuoLQyAmAYgSALsDDHmjyLxbC"
      + "blog :  https://www.simplilearn.com/tutorials/spring-tutorial/spring-aop-aspect-oriented-programming#:~:text=Aspect%2DOriented%20Programming%20(AOP),into%20separate%20parts%20called%20concerns.",
  },
  {
    question: "default skope of a bean",
    answer: "The default scope for the bean is a singleton.",
  },
  {
    question: "string, string builder string buffer",
    answer: "https://www.digitalocean.com/community/tutorials/string-vs-stringbuffer-vs-stringbuilder"
      + "youtube links : https://www.youtube.com/watch?v=_m04SPTU4N0, https://www.youtube.com/watch?v=GnpEm89Y0fg&list=PLd3UqWTnYXOlrdBwt2DTnF3u3W-1Kozk0 (durga sir playlist)",
  },

  {
    question: "Which memory is used in String, String Builder, String Buffer",
    answer: "TO BE RESEARCH",
  },
  {
    question: "what is web container?",
    answer: "As per interviewer it is server like tomcat which deals with servlet"
      + " => But , A web container is the component of a web server that interacts with Java servlets. A web container manages the life cycle of servlets; it maps a URL to a particular servlet while ensuring that the requester has relevant access-rights."
      + "https://www.educative.io/answers/what-is-a-web-container, youtube link : https://www.youtube.com/watch?v=VI0lp5ZUooc",
  },
  {
    question: "where request will come and first point of contact",
    answer: "TO be confirmed,but may be dispatcher servlet",
  },
  {
    question: "What is Dispatcher Servlet in Spring?",
    answer: "Spring is one of the most popular Java EE frameworks. It is an open-source lightweight framework that allows Java EE 7 developers to build simple, reliable, and scalable enterprise applications. This framework mainly focuses on providing various ways to help you manage your business objects. It made the development of Web applications much easier than compared to classic Java frameworks and application programming interfaces (APIs), such as Java database connectivity (JDBC), JavaServer Pages(JSP), and Java Servlet. This framework uses various new techniques such as Aspect-Oriented Programming (AOP), Plain Old Java Object (POJO), and dependency injection (DI), to develop enterprise applications. Now we are going to discuss one of the most important concepts in the Spring framework e.g Dispatcher Servlet."
      + "youtbue links : https://www.youtube.com/watch?v=DL3tQNj7j1M, https://www.youtube.com/watch?v=AzI7E81TBfc(code example)"
      + "blog links : https://www.geeksforgeeks.org/what-is-dispatcher-servlet-in-spring/",
  },
  {
    question: "own exception class / Custom Exception /own exception will be checked or unchecked?",
    answer: "https://www.javatpoint.com/custom-exception, https://www.geeksforgeeks.org/user-defined-custom-exception-in-java/, https://www.baeldung.com/java-new-custom-exception"
      + "youtube links : https://www.youtube.com/watch?v=V_jVp6WdW0Y, https://www.youtube.com/watch?v=ojQADu2IJ54",
  },
  {
    question: "The Celebrity Problem",
    answer: "https://www.geeksforgeeks.org/the-celebrity-problem/",
  },
  {
    question: "6 jars haiving candies, 5 jars have candies of 1g, one jar has 0.5 gm candies, you have a digital weight. How many minimum tries are needed to find the defective jar.",
    answer: "https://www.geeksforgeeks.org/puzzle-7-find-the-jar-with-contaminated-pills/",
  },

  {
    question: "Robot Bounded In Circle",
    answer: "https://leetcode.com/problems/robot-bounded-in-circle/",
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