Java.perform(function() {
    console.log("[*] N7).");
//N7[@m_na891] telegram: https://t.me/N7_Enzo
    try {
        const AdActivity = Java.use('com.google.android.gms.ads.AdActivity');//N7[@m_na891] telegram: https://t.me/N7_Enzo
        AdActivity.onCreate.implementation = function(bundle) {
            console.log("[+] AdActivity intercepted! Closing ad silently.");
            this.onCreate(bundle);
            this.finish();
        };
        console.log("[SUCCESS] Ad Assassin is ARMED.");
    } catch (e) {
        console.error("[!] Failed to arm Ad Assassin: " + e.message);
    }
//N7[@m_na891] telegram: https://t.me/N7_Enzo
    try {
        const SubscriptionVerifier = Java.use('y2.Y');
        const AppStateEnum = Java.use('y2.g0$a');
        const unlimitedSubscription = AppStateEnum.g.value; 
//N7[@m_na891] telegram: https://t.me/N7_Enzo
        SubscriptionVerifier.k.implementation = function(purchase, responseString) {
            console.log("[!!!] VERIFIER HIT! Intercepted the server response handler y2.Y.k().");
            console.log("    -> Original server response might have been: " + responseString);
            console.log("    -> Forcing result to UNLIMITED_SUBSCRIPTION regardless of server response.");
            //N7[@m_na891] telegram: https://t.me/N7_Enzo
            return unlimitedSubscription;
        };
        console.log("[SUCCESS] .");
//N7[@m_na891] telegram: https://t.me/N7_Enzo
    } catch (e) {
        console.error("[!] Failed : " + e.message);
        console.error("    N7.");
    }
    //N7[@m_na891] telegram: https://t.me/N7_Enzo
    console.log("\n[*] All systems N7.");
});
//N7[@m_na891] telegram: https://t.me/N7_Enzo