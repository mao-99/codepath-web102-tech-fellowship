//
//  bayo.cpp
//  test
//
//  Created by Mubarak Odufade on 9/17/24.
//

#include <stdio.h>
#include <iostream>
#include <iomanip>

using namespace std;

int main() {
    //Setting decimal places
    cout << setprecision(2) << fixed;
    
    //Conversions
    const double mileToMeter = 1609.34;
    const double minToSeconds = 60;
    
    //Starting from csi
    double jfkDistance = 26.0, bayRidgeDistance = 19.0,jerseyCityDistance = 12.0;
    double jfkMinutes = 20.0, bayRidgeMinutes = 19.0, jerseyCityMinutes = 26.0;
    
    //Based on these three destinations, the safe velocity is the average of all three velocities
    double jfkSafeVel = (jfkDistance * mileToMeter)/(jfkMinutes * minToSeconds);
    double bayRidgeSafeVel = (bayRidgeDistance * mileToMeter)/(bayRidgeMinutes * minToSeconds);
    double jerseyCitySafeVel = (jerseyCityDistance * mileToMeter)/(jerseyCityMinutes * minToSeconds);
    
    double safeVel = (jfkSafeVel + bayRidgeSafeVel + jerseyCitySafeVel) / 3;
    
    cout << "The safe velocity to travel based on these three distances and the time estimated by google maps is: " << safeVel << " m/s." << endl;
    
    
    int userInput;
    
    cout << "Make a selection: " << endl;
    cout << "1. Find velocity to destination." << endl;
    cout << "2. Find time to destination." << endl;
    cout << "3. Quit." << endl;
    
    cin >> userInput;
    
    while (userInput != 1 || userInput != 2 || userInput != 3) {
        cout << "Please make a valid selection." << endl;
        cin >> userInput;
    }
    
    switch (userInput) {
        case 1:
            cout << "1" << endl;
            break;
        
        case 2:
            cout << "2" << endl;
            break;
            
        case 3:
            cout << "3" << endl;
            break;
            
        default:
            break;
    }
    
    double csi = 0;
    
    return 0;
}
