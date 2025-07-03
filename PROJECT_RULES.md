# Project Rules & Lessons Learned 📚

## 🎯 Project Overview
**Project**: Next-Forge Portfolio Implementation  
**Goal**: Create a functional portfolio for job applications within 2 hours  
**Status**: In Progress  

---

## 🚨 Critical Lessons Learned

### Environment Variables Management
**Issue**: Complex environment variable setup with many services  
**Solution**: 
- Focus on essential services only (Auth, Database, Analytics)
- Make non-critical services optional
- Use placeholder values for development, real keys for production
- Document all required variables in `ENV_SETUP_CHECKLIST.md`

**Rule**: Always check `ENV_SETUP_CHECKLIST.md` before making environment changes

### Database Migrations
**Issue**: Drizzle migrations not detecting schema changes automatically  
**Solution**: 
- Create manual migration files when auto-detection fails
- Use `pnpm drizzle-kit push` to apply changes directly
- Always verify schema changes in database after migration

**Rule**: Test database connections after any schema changes

### Authentication Flow
**Issue**: Clerk authentication redirects working but need full flow verification  
**Solution**: 
- Test complete sign-up/sign-in process
- Verify user session management
- Test protected route access

**Rule**: Always test authentication flow end-to-end before proceeding

### Next.js Image Component
**Issue**: External image domains not configured, causing 500 errors  
**Solution**: 
- Add external domains to `next.config.ts` remotePatterns
- Configure each domain with protocol and hostname
- Restart dev server after config changes

**Rule**: Always configure external image domains in Next.js config before using Next/Image

---

## 🛠️ Development Workflow Rules

### Git Management
1. **Commit frequently** - Every major change should be committed
2. **Use descriptive commit messages** - Include what was changed and why
3. **Keep commits atomic** - One logical change per commit
4. **Push regularly** - Don't let local changes accumulate

### Code Organization
1. **Follow Next-Forge structure** - Use existing patterns and conventions
2. **Keep components modular** - One responsibility per component
3. **Use TypeScript strictly** - No `any` types, proper interfaces
4. **Document complex logic** - Add comments for non-obvious code

### Testing Strategy
1. **Test locally first** - Always verify changes work locally
2. **Check TypeScript errors** - Run `pnpm typecheck` before committing
3. **Test responsive design** - Verify mobile, tablet, desktop layouts
4. **Check browser console** - No errors should appear

---

## 📋 Quality Assurance Checklist

### Before Every Commit
- [ ] TypeScript compilation passes
- [ ] No console errors in browser
- [ ] Responsive design works
- [ ] Authentication flow tested
- [ ] Database operations work

### Before Every Deployment
- [ ] Production build succeeds
- [ ] Environment variables verified
- [ ] All integrations tested
- [ ] Performance acceptable (< 3s load time)

---

## 🔧 Technical Decisions Made

### Database Schema
- **Table naming**: Use lowercase with underscores (`projects`, `media_urls`)
- **Timestamps**: Include `createdAt` and `updatedAt` for all tables
- **Arrays**: Use PostgreSQL arrays for tags and media URLs
- **Public/Private**: Boolean flag for portfolio visibility

### Portfolio Structure
- **Route**: `/portfolio` for main portfolio page
- **Layout**: Masonry grid with responsive design
- **Components**: Modular structure with reusable components
- **Data**: Dynamic from database with fallback to static

### Authentication Strategy
- **Provider**: Clerk (keep existing setup)
- **Access Control**: Protected routes for portfolio management
- **Sharing**: Public/private portfolio options
- **Fallback**: Simple password protection if needed

---

## 🚨 Common Issues & Solutions

### Environment Variables
**Problem**: Missing or incorrect API keys  
**Solution**: 
1. Check `ENV_SETUP_CHECKLIST.md`
2. Verify key formats (prefixes like `sk_`, `pk_`, etc.)
3. Test each service individually
4. Use development keys for local testing

### Database Connection
**Problem**: Connection failures or schema issues  
**Solution**:
1. Verify `DATABASE_URL` is correct
2. Check network connectivity
3. Run migrations manually if needed
4. Test with simple queries

### Build Errors
**Problem**: TypeScript or build failures  
**Solution**:
1. Run `pnpm typecheck` to identify issues
2. Check import paths and dependencies
3. Verify all required files exist
4. Clear cache and rebuild if needed

### Image Loading Errors
**Problem**: Next.js Image component fails to load external images  
**Solution**:
1. Add domain to `packages/next-config/index.ts` remotePatterns
2. Include protocol and hostname
3. Restart development server
4. Test with actual image URLs

---

## 📊 Performance Guidelines

### Loading Times
- **Target**: < 3 seconds for initial load
- **Images**: Optimize and use Next.js Image component
- **Code**: Minimize bundle size, use code splitting
- **Database**: Optimize queries, use indexes

### User Experience
- **Responsive**: Must work on all screen sizes
- **Accessibility**: Follow WCAG guidelines
- **Navigation**: Clear and intuitive
- **Feedback**: Loading states and error handling

---

## 🔄 Deployment Strategy

### Vercel Configuration
1. **Environment Variables**: Set all required variables in Vercel dashboard
2. **Build Settings**: Use default Next.js settings
3. **Domain**: Configure custom domain if needed
4. **SSL**: Automatic with Vercel

### Monitoring
1. **Error Tracking**: Use Sentry for production errors
2. **Analytics**: PostHog for user behavior
3. **Performance**: Vercel Analytics and Lighthouse
4. **Uptime**: Monitor deployment health

---

## 📝 Documentation Standards

### Code Documentation
- **Components**: JSDoc comments for complex components
- **Functions**: Describe parameters and return values
- **Types**: Document complex TypeScript interfaces
- **Logic**: Explain business logic and decisions

### Project Documentation
- **README**: Keep updated with setup instructions
- **Changelog**: Document major changes and decisions
- **Architecture**: Document system design and decisions
- **Troubleshooting**: Common issues and solutions

---

## 🎯 Success Metrics

### Portfolio Functionality
- [ ] Portfolio loads and displays projects
- [ ] Authentication works correctly
- [ ] Projects can be viewed in detail
- [ ] Portfolio can be shared via URL
- [ ] Mobile responsive design works
- [ ] No critical errors in console

### Code Quality
- [ ] TypeScript compilation passes
- [ ] No linting errors
- [ ] Test coverage > 80%
- [ ] Performance score > 90
- [ ] Accessibility score > 90

---

## 🚨 Emergency Procedures

### If Portfolio Implementation Fails
1. **Fallback**: Use existing web app structure
2. **Simplify**: Basic project list without advanced features
3. **Static**: Use static data instead of database
4. **Deploy**: Get something working first, iterate later

### If Environment Variables Fail
1. **Local Only**: Use development environment
2. **Mock Services**: Create mock implementations
3. **Focus Core**: Prioritize essential functionality
4. **Document**: Record issues for future reference

### If Deployment Fails
1. **Local Demo**: Use local development for presentation
2. **Screenshots**: Capture portfolio screenshots
3. **Video**: Record portfolio walkthrough
4. **Backup Plan**: Have alternative presentation method

---

## 📞 Resources & References

### Documentation
- [Next-Forge Docs](https://www.next-forge.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Clerk Documentation](https://clerk.com/docs)

### Key Files
- `ENV_SETUP_CHECKLIST.md` - Environment variable reference
- `NEXT_FORGE_PRODUCTION_PLAN.md` - Overall project plan
- `2_HOUR_SPRINT_CHECKLIST.md` - Immediate action items
- `packages/database/schema.ts` - Database structure

---

**Remember**: The goal is a working portfolio for your job application. Focus on functionality over perfection, document everything, and maintain good development practices throughout the process. 