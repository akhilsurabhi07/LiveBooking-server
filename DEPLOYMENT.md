# 🚀 Deployment Guide for Live Bookings Viewer

## ⚠️ Important: Socket.IO Deployment Considerations

This application uses Socket.IO for real-time communication, which requires special handling for deployment. Here are the best options:

## 🎯 **Recommended Deployment Options**

### **Option 1: Railway (Recommended for Socket.IO)**
Railway is perfect for Socket.IO applications and offers a generous free tier.

1. **Install Railway CLI:**
   ```bash
   npm install -g @railway/cli
   ```

2. **Login to Railway:**
   ```bash
   railway login
   ```

3. **Initialize and deploy:**
   ```bash
   railway init
   railway up
   ```

4. **Get your live URL** from the Railway dashboard

### **Option 2: Render**
Render supports WebSockets and is great for real-time apps.

1. **Create account** at [render.com](https://render.com)
2. **Connect your GitHub repository**
3. **Create a new Web Service**
4. **Set build command:** `npm install`
5. **Set start command:** `node server.js`
6. **Deploy!**

### **Option 3: Heroku**
Heroku is reliable for Socket.IO applications.

1. **Install Heroku CLI:**
   ```bash
   npm install -g heroku
   ```

2. **Login and create app:**
   ```bash
   heroku login
   heroku create your-app-name
   ```

3. **Deploy:**
   ```bash
   git add .
   git commit -m "Deploy to Heroku"
   git push heroku main
   ```

### **Option 4: DigitalOcean App Platform**
DigitalOcean offers excellent support for Node.js apps.

1. **Create account** at [digitalocean.com](https://digitalocean.com)
2. **Connect your GitHub repository**
3. **Create a new App**
4. **Set build command:** `npm install`
5. **Set run command:** `node server.js`
6. **Deploy!**

## 🔧 **Vercel Deployment (Limited Socket.IO Support)**

If you still want to try Vercel, follow these steps:

### **Step 1: Install Vercel CLI**
```bash
npm install -g vercel
```

### **Step 2: Login to Vercel**
```bash
vercel login
```

### **Step 3: Deploy**
```bash
vercel
```

### **Step 4: Follow the prompts**
- Link to existing project or create new
- Set project name
- Confirm deployment

### **Step 5: Get your live URL**
Vercel will provide you with a URL like: `https://your-app.vercel.app`

## 📋 **Environment Variables (if needed)**

For most deployments, no environment variables are required. The app uses:
- `PORT`: Automatically set by the hosting platform
- `NODE_ENV`: Automatically set by the hosting platform

## 🎉 **After Deployment**

1. **Test your live URL** - the app should work immediately
2. **Share the URL** with others to see real-time bookings
3. **Monitor the logs** in your hosting platform's dashboard

## 🔗 **Sharing Your Project**

### **GitHub Repository**
1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Share the GitHub URL** with others

### **Live Demo**
Share your deployed URL (e.g., `https://your-app.railway.app`)

## 🛠️ **Troubleshooting**

### **Socket.IO Connection Issues**
- Ensure your hosting platform supports WebSockets
- Check that the Socket.IO client is connecting to the correct URL
- Verify CORS settings if needed

### **Build Issues**
- Make sure all dependencies are in `package.json`
- Check that the start script is correct: `"start": "node server.js"`

### **Performance Issues**
- The app keeps only the last 50 bookings to prevent memory issues
- Consider using a database for production use

## 📞 **Need Help?**

If you encounter issues:
1. Check the hosting platform's documentation
2. Review the error logs in your hosting dashboard
3. Ensure your hosting platform supports WebSockets/Socket.IO

---

**Recommended for this project:** Railway or Render for the best Socket.IO support! 