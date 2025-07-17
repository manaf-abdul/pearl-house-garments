import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { toast } from "@/hooks/use-toast";
import { 
  Eye, 
  EyeOff, 
  Lock, 
  User, 
  Sparkles,
  AlertCircle 
} from "lucide-react";

interface LoginFormProps {
  onLogin: () => void;
}

// Static credentials - in a real app, this would be handled by a backend
const VALID_CREDENTIALS = {
  username: "admin",
  password: "admin123"
};

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // Simulate loading time
    await new Promise(resolve => setTimeout(resolve, 800));

    if (username === VALID_CREDENTIALS.username && password === VALID_CREDENTIALS.password) {
      toast({
        title: "Welcome back!",
        description: "Successfully logged into admin panel",
      });
      onLogin();
    } else {
      setError("Invalid username or password");
      toast({
        title: "Login Failed",
        description: "Please check your credentials and try again",
        variant: "destructive",
      });
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-admin flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8 animate-fade-in">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-primary rounded-full shadow-admin animate-float">
              <Sparkles className="h-12 w-12 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
            Admin Access
          </h1>
          <p className="text-muted-foreground">
            Enter your credentials to manage the media carousel
          </p>
        </div>

        {/* Login Card */}
        <Card className="shadow-admin border-0 bg-card/80 backdrop-blur-sm animate-scale-in">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center flex items-center justify-center gap-2">
              <Lock className="h-5 w-5 text-primary" />
              Sign In
            </CardTitle>
            <CardDescription className="text-center">
              Access the admin dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-sm font-medium">
                  Username
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="username"
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="pl-10 border-border/50 bg-background/50 focus:bg-background"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10 border-border/50 bg-background/50 focus:bg-background"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                  </Button>
                </div>
              </div>

              {error && (
                <Alert variant="destructive" className="animate-scale-in">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <Button
                type="submit"
                className="w-full bg-gradient-primary hover:opacity-90 border-0 shadow-lg"
                disabled={isLoading || !username || !password}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Signing in...
                  </div>
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>

            {/* Demo Credentials */}
            {/* <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border/50">
              <p className="text-sm font-medium text-muted-foreground mb-2">Demo Credentials:</p>
              <div className="space-y-1 text-sm">
                <p><span className="font-medium">Username:</span> admin</p>
                <p><span className="font-medium">Password:</span> admin123</p>
              </div>
            </div> */}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginForm