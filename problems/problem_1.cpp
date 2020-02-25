#include<bits/stdc++.h> 
using namespace std;

int main() {
	char str[50];
	int i=0,n;
	cin>>n;
	while(n>0){
	    int rem=n%26;
	    if(rem==0)
        {
	        str[i++]='Z';
	        n=(n/26)-1;
	    }
	else
        {
	        str[i++]=(rem-1)+'A';
	        n=n/26;
	    }
	    str[i]='\0';
	    reverse(str,str+strlen(str));
	}
	cout<<str<<endl;
	return 0;
}

/*
The approach to solving the problem is that excel plots the A-Z colums then 27 column is addressed as AA which means we can calculate the remainder 
for the given integer. If rem = 0 then n=(n/26)-1 because there are 25th with count in respect to A and when remainder is non zero integer then n=(n/26)
and then we reverse the string to print.
*/