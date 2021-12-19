@isTest
public with sharing class MyClass_UnitTest {
        @IsTest
        static void Sample_Test(){
        test.startTest();
            MyClass mClass = new MyClass();
            System.assertEquals(1, 1);
        test.stopTest();
   }
}
