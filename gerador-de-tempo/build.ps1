$source = (Get-Content .\Program.cs) -join " "
Add-Type $source -Language CSharp  
[Scripts.Program]::Main((""))